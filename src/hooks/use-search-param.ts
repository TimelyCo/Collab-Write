"use client"
import {parseAsString ,useQueryState } from "nuqs";

export function useSearchPAraam () {
    return useQueryState (
        "search",
        parseAsString.withDefault("").withOptions({clearOnDefault:true}),
    )
}