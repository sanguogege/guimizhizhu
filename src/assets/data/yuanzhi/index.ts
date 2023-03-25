const modules: Record<string, any> = import.meta.glob(
    ["./yz/*.json"],
    {
        eager: true
    }
);

const yuanzhi: any[] = [];

Object.keys(modules).forEach(key => {
    yuanzhi.push(modules[key].default);
});


export default {
    yuanzhi: yuanzhi
}