
import { defineConfig } from 'rolldown';

const xeokit_path_repository = 'xeokit-sdk'

export default defineConfig({
    input: `${xeokit_path_repository}/src/index.js`,
    output: [
        {
            dir: './dist',
            preserveModules: true
        }
    ],
    watch: {
        include: `${xeokit_path_repository}/**`,
        buildDelay: 200,
    },
});