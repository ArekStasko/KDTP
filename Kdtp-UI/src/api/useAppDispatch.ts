import { useDispatch } from "react-redux";
import type { AppDispatch } from "./Store.ts";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
