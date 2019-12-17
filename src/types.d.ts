
declare module "*.scss" {
    const styles: any
    export = styles
}

declare module "serviceworker-webpack-plugin/lib/runtime" {
    
    interface Runtime {
        register(): void
    }

    const runtime: Runtime

    export default runtime
}