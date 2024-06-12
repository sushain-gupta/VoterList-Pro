import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(() => {
	return {
		server: {
			port: 4000,
			host: "0.0.0.0",
		},
		build: {
			outDir: "build",
		},
		plugins: [react()],
	};
});
