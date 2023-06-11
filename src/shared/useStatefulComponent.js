import {AsyncDirective} from "lit-html/async-directive.js";
import {directive} from "lit-html/directive.js";

class StateDerictive extends AsyncDirective {
    render(
        signal = null,
        component = () => {
        }
    ) {
        if (signal !== null) {
            const [state, effect] = signal;
            effect(
                function () {
                    const template = component(state.value);
                    this.setValue(template);
                }.bind(this)
            );
            return component(state.value);
        } else {
            return component();
        }
    }
}

export const useStatefulComponent = directive(StateDerictive);
