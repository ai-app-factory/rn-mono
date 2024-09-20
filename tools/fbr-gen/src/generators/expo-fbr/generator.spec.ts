import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { expoFbrGenerator } from './generator';
import { ExpoFbrGeneratorSchema } from './schema';

describe('expo-fbr generator', () => {
  let tree: Tree;
  const options: ExpoFbrGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await expoFbrGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
