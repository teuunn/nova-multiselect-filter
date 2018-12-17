import FilterSelector from './components/FilterSelector'

Nova.booting(Vue => {
    Vue.component('custom-filter-selector', Vue.component('custom-filter-selector').extend(FilterSelector));
});
