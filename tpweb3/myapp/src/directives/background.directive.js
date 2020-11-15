import Vue from 'vue';

const defaultBackgroundColor = 'lightBlue'

export const Background = {
  bind: function (el, binding, vnode)  {
    if (el) {
      // Set the element's background color.
      el.style.backgroundColor = binding.expression || defaultBackgroundColor;
      el.innerHTML +=  'My background text is :  ' + binding.expression || defaultBackgroundColor;
    }
  }
}

Vue.directive('background', Background);
