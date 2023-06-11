import {State} from "../state/state.js";
import scripts from "../scripts.js";

if (State.getFromLocal() !== null) {
	State.pushToLocal(State.getState())
} else {
	State.setState(State.getFromLocal())
}

scripts()