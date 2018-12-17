import FilterSelector from './components/FilterSelector'

Nova.booting(Vue => {
    Vue.component('custom-filter-selector', FilterSelector).extend(FilterSelector);
});
