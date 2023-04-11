import {
    computed,
    ref,
    watchEffect,
    type ComputedRef,
    type Ref,
} from "vue";

export function useProps<T extends object>(p: T): Ref<T>;
export function useProps<T extends object, R>(p: T, getter: (ref: T) => R): ComputedRef<R>;
export function useProps<T extends object, R>(
    p: T,
    getter?: (ref: T) => R,
) {
    const t = ref(p);
    watchEffect(() => {
        t.value = p;
    });
    if (!getter) {
        return t;
    }
    const cp = computed(() => getter(t.value));
    return cp;
}
