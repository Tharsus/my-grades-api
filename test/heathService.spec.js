import assert from 'assert';

import healthService from '../services/healthService.js';

describe('[health]', function () {
  it("checks system's health", function () {
    const health = healthService.health();

    assert.equal(health.isHealthy, true);
  });
});
