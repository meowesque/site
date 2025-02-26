import { createSignal, createEffect, onMount } from "solid-js"
import * as mgl from "@math.gl/core"

const vertShader = `
attribute vec3 aVertexPos;

void main() {
  gl_Position = vec4(aVertexPos, 1.0);
}
`

const fragShader = `
#ifdef GL_ES
precision highp float;
#endif

uniform vec4 uColor;

void main() {
  gl_FragColor = uColor;
}
`

function compileShader(gl, source, type) {
  const shader = gl.createShader(type)

  gl.shaderSource(shader, source)
  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
    console.log(`Error compiling ${type === gl.VERTEX_SHADER ? "vertex" : "fragment"} shader: ${gl.getShaderInfoLog(shader)}`)

  return shader
}

function step(gl, timestamp) {
  gl.clear(gl.COLOR_BUFFER_BIT)

  gl.drawArrays(gl.TRIANGLES, 0, 6);

  requestAnimationFrame((timestamp) => step(gl, timestamp))
}

export default function CupDonutHomo() {
  let canvasRef;
  const [gl, setGl] = createSignal(null);

  onMount(() => {
    const context = canvasRef.getContext("webgl")
    setGl(context);
  })

  createEffect(() => {
    const _gl = gl()

    if (!_gl)
      return

    const program = _gl.createProgram()
    const vert = compileShader(_gl, vertShader, _gl.VERTEX_SHADER)
    const frag = compileShader(_gl, fragShader, _gl.FRAGMENT_SHADER)

    _gl.attachShader(program, vert)
    _gl.attachShader(program, frag)

    _gl.linkProgram(program)
    _gl.useProgram(program)

    if (!_gl.getProgramParameter(program, _gl.LINK_STATUS))
      console.log(`Error linking shader program: ${_gl.getProgramInfoLog(program)}`)

    const aspect = canvasRef.width / canvasRef.height;
    const vertexArray = new Float32Array([
      -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, -0.5,
    ])
    const vertexBuffer = _gl.createBuffer()

    _gl.bindBuffer(_gl.ARRAY_BUFFER, vertexBuffer);
    _gl.bufferData(_gl.ARRAY_BUFFER, vertexArray, _gl.STATIC_DRAW)

    const aVertexPos = _gl.getAttribLocation(program, "aVertexPos");
    const uColor = _gl.getUniformLocation(program, "uColor");

    _gl.uniform4fv(uColor, [0.0, 0.0, 0.0, 1.0])

    _gl.enableVertexAttribArray(aVertexPos)
    _gl.vertexAttribPointer(aVertexPos, 2, _gl.FLOAT, false, 0, 0);

    _gl.viewport(0, 0, canvasRef.width, canvasRef.height)
    _gl.clearColor(1.0, 1.0, 1.0, 0.0);

    step(_gl, canvasRef, null)
  })

  return (
    <canvas
      ref={canvasRef}
      class='w-48 h-48'
      id='cup-donut-homo-canvas'
    />
  )
}