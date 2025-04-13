# This Makefile runs all the tests in sequence

.PHONY: setup test clean

# Running tests sequence in the test target
# Add your test commands here in sequence please add 
# "++++" before your test that makes it clear
# Test case format
# 1. #++++
# 2. @echo "What does your test do"
# 3. chmod +x ./filename
# 4. @./filename
test:
	#++++
	@echo "Running tests..."
	#++++
	@echo "Running setup..."
	@chmod +x ./setup.sh
	@./setup.sh
	#++++

# clean the server
# DO NOT ADD YOUR TESTS HERE further down the line
# From this point will be tests to close the port from .env

