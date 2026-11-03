export class EventBus {
  #handlers = new Map()

  on(type, handler) {
    const handlers = this.#handlers.get(type) ?? new Set()
    handlers.add(handler)
    this.#handlers.set(type, handlers)
    return () => this.off(type, handler)
  }

  off(type, handler) {
    this.#handlers.get(type)?.delete(handler)
  }

  emit(type, payload) {
    this.#handlers.get(type)?.forEach((handler) => handler(payload))
  }
}
