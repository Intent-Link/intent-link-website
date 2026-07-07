.DEFAULT_GOAL := help

.PHONY: help install dev build start lint test test-watch test-coverage knip clean

help: ## Show this help
	@echo "Available targets:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-14s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	npm install

dev: ## Start the dev server
	npm run dev

build: ## Production build (full typecheck)
	npm run build

start: ## Serve the production build
	npm run start

lint: ## Run ESLint
	npm run lint

test: ## Run unit tests (Vitest)
	npm test

test-watch: ## Run unit tests in watch mode
	npm run test:watch

test-coverage: ## Run unit tests with coverage
	npm run test:coverage

knip: ## Run knip (unused code/deps check)
	npm run knip

clean: ## Remove build artifacts and node_modules
	rm -rf .next node_modules
