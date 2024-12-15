import $ from 'jquery';


$.fn.plugin = (pluginConfig) => {

    if (Object.prototype.toString.call(pluginConfig) !== '[object Object]') {
        throw new Error('Parameter must be an object');
    }

    if (!('param1' in pluginConfig) || !('param2' in pluginConfig)) {
        throw new Error('Required parameters param1 and param2 must be provided');
    }

    if (typeof pluginConfig.param1 !== 'number' || typeof pluginConfig.param2 !== 'number') {
        throw new Error('Parameters param1 and param2 must be numbers');
    }

    console.log('Plugin initialized', pluginConfig);

    return this;
};