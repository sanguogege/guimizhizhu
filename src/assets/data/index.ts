const modules: Record<string, any> = import.meta.glob(
    ["./*/*.ts"],
    {
        eager: true
    }
);

const all: any = {}

Object.keys(modules).forEach(key => {
    Object.assign(all, modules[key].default)
});

export {
    all
}