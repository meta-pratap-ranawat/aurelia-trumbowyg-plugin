import { configure } from '../../src/index';

class ConfigStub {
    globalResources(...resources) {
        this.resources = resources;
    }
}

describe('the Aurelia configuration', () => {
    let mockedConfiguration;

    beforeEach(() => {
        mockedConfiguration = new ConfigStub();
        configure(mockedConfiguration);
    });

    it('should register a global resource', () => {
        expect(mockedConfiguration.resources).toContain('./trumbowyg-editor');
    });

});
