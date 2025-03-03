![Puppy Programmer](/public/dog-programmer.png "Puppy Programmer")

# QUIC and Actors with Tokio

After discovering [A. Rhyl, Actors with Tokio](https://ryhl.io/blog/actors-with-tokio/) in my search of architecting servers in a more modular way via common encapsulation patterns, I was delighted to finally find something that helped me understand the bigger picture. This resource made me rethink server architecture and provided valuable insights into the use of actors with Tokio. The explanations were clear, and the examples were practical, making it an excellent starting point for anyone interested in this topic. However, while it was incredibly informative, I found it did not fully satisfy my needs in my endeavors. I was left wanting more detailed guidance and advanced techniques to further enhance my server architecture.

## Actors with Tokio

The gist of [A. Rhyl, Actors with Tokio](https://ryhl.io/blog/actors-with-tokio/) is how an actor is split into a handle (also referred to as a proxy) and the task. Typically the "task" is an I/O operation that the handle communicates with, providing a simple interface for the programmer whilst keeping everything decoupled. Let's first look a simple (pure) actor and actor handle that doesn't actually interact with the "outside world," merely producing naturals incrementally:

### Actor Implementation

```rust
enum Msg {
  Next(tokio::sync::oneshot::Sender<u64>),
}

struct Actor {
  id: u64,
  rx: tokio::sync::mpsc::Receiver<Msg>,
}

impl Actor {
  fn new(rx: tokio::sync::mpsc::Receiver<Msg>) -> Self {
    Self { 
      id: 0,
      rx,
    }
  }

  async fn run(mut self) {
    while let Some(msg) = self.rx.recv().await {
      self.update(msg);
    }
  }

  fn update(&mut self, msg: Msg) {
    match msg {
      Msg::Next(tx) => {
        // We specify `let _ = ...` to ignore handling an error, intentionally!
        let _ = tx.send(self.id);

        self.id += 1;
      }
    }
  }
}
```

[Full example](PUT.GIST.HERE)

### Handle Implementation

```rust
const CHANNEL_SIZE: usize = 2;

// Note `pub` as this is what the user actually interfaces with.
#[derive(Clone)]
pub struct Handle {
  tx: tokio::sync::mpsc::Sender<Msg>
}

impl Handle {
  pub fn new() -> Self {
    let (rx, tx) = tokio::sync::mpsc::channel(CHANNEL_SIZE);
    let actor = Actor::new(rx);

    tokio::spawn(async move { actor.run().await });

    Self { tx }
  }

  /// Retrieve the next unique id.
  pub async fn next(&self) -> u64 {
    let (tx, rx) = tokio::oneshot::channel();

    // If `self.tx.send` fails, so does `rx.await`.
    // There's no reason to check for errors twice.
    let _ = self.tx.send(Msg::Next(tx)).await;

    rx.await.expect("Actor died")
  }
}
```

[Full example](PUT.GIST.HERE)

We utilize `tokio::sync::mpsc`, a multi-producer, single consumer channel. Meaning, there can only exist one consumer (our actor) and there can be many producers (clones of our actor handle).

In the method `Actor::run` we take ownership of the actor, wait for incoming messages indefinitely. If at any point `self.rx.recv()` returns `Option::None` it's presumed that all senders to our receiver have been dropped, we then gracefully shut down.

Within the `Actor::update` method, we intentionally ignore the possibility of an error if we fail to send our response. Again, we presume any receiver has been dropped. So we'll just pretend like nothing happened.

## Getting started with [quinn](https://crates.io/crates/quinn)

