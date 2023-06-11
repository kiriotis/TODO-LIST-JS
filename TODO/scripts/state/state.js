export class State {
	static stateName = 'localState'
	static state = []

	static getState() {
		return State.state
	}

	static setState(newState) {
		this.state = newState
	}

	static pushToLocal() {
		return localStorage.setItem(this.stateName, JSON.stringify(this.state))
	}

	static getFromLocal() {
		return JSON.parse(localStorage.getItem(this.stateName))
	}

	static pushToServer() {

	}

	static getFromServer() {

	}
}
