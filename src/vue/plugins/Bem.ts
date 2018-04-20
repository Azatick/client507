import Vue from "vue";
import * as $ from "jquery";
import {PluginObject} from "vue/types/plugin";
window['jQuery'] = $;
require("attrchange");

interface VueBEMOptions {
    element?: string;
    modifier?: string;
}

export default {
    install (Vue, options: VueBEMOptions = {}) {

        let DIVIDERS = {
            element: options.element || "__",
            modifier: options.modifier || "--"
        }

        Vue.directive('block', {
            bind: defineBlockClass
        });

        Vue.directive('element', {
            inserted: defineElementClass
        });
        function getParent (el) {
            let parent = el.parentElement;
            if (parent.bem && parent.bem.block) {
                return parent;
            } else {
                return getParent(parent);
            }
        }

        function defineBlockClass (el, binding) {
            addClass(el, binding);
            //observe changing className
            $(el)['attrchange']({
                callback (e) {
                    if (e.attributeName == "class") {
                        addClass(el, binding);
                    }
                }
            });
            function addClass (el, binding) {
                let { modifiers, expression, value } = binding;
                let providedClasses = (value || expression || "").split(" ");
                let providedClassName = providedClasses[providedClasses.length-1];
                //define bem property for correct defining parent of element
                el.bem = {
                    block: providedClassName
                }
                $(el).addClass(providedClassName);
                //add modifiers to element
                Object.keys(modifiers).map(bem_modifire => {
                    $(el).addClass(`${providedClassName}${DIVIDERS.modifier}${bem_modifire}`);
                });
            }
        }

        function defineElementClass (el, binding) {
            addClass(el, binding);
            //observe changing className
            $(el)['attrchange']({
                callback (e) {
                    if (e.attributeName == "class") {
                        addClass(el, binding);
                    }
                }
            });
            function addClass (el, binding) {
                let { modifiers, expression, value } = binding;
                let providedClasses = (value || expression || "").split(" ");
                let providedClassName = providedClasses[providedClasses.length-1];
                //get block-parent of element
                let parent = getParent(el);
                //adding class to element
                let elementClassName = `${parent.bem.block}${DIVIDERS.element}${providedClassName}`;
                $(el).addClass(elementClassName);
                //add modifiers to element
                Object.keys(modifiers).map(bem_modifier => {
                    $(el).addClass(`${elementClassName}${DIVIDERS.modifier}${bem_modifier}`);
                });
            }
        }
    }
} as PluginObject<VueBEMOptions>
