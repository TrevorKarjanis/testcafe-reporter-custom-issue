export default {
    async reportTaskStart(/* startTime, userAgents, testCount */) {
        throw new Error('Not implemented');
    },

    async reportFixtureStart(/* name, path, meta */) {
        throw new Error('Not implemented');
    },

    async reportTestDone(/* name, testRunInfo, meta */) {
        throw new Error('Not implemented');
    },

    async reportTaskDone(/* endTime, passed, warnings, result */) {
        throw new Error('Not implemented');
    }
};