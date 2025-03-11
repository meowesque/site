OUTPUT := main
SOURCES := $(wildcard ./src/*.scm)

GARBAGE += $(wildcard *.so)
GARBAGE += $(wildcard *.import.scm)
GARBAGE += $(wildcard *.o)
GARBAGE += $(wildcard *.link)
GARBAGE += $(wildcard *.install.sh)
GARBAGE += $(wildcard *.build.sh)
GARBAGE += $(OUTPUT)

build: $(SOURCES)
	@sudo chicken-install -no-install -force

clean: $(GARBAGE)
	@rm -rf $(GARBAGE)