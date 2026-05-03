"use client";

import { useEffect, useState } from "react";
import { Guru} from "@/types/type";
import { fetchNewsList } from "@/lib/newsApi";
import axios from "axios";
import {  api_guru } from "@/constans/strings";

export const useGuru = () => {
  const [guru, setGuru] = useState<Guru[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGuru = async () => {
      try {
        const data = await axios.get<Guru[]>(`${api_guru}`).then((res) => res.data);
        setGuru(data);
      } catch (error) {
        console.error(error);
        setError("Gagal Mengambil Data Guru.");
      } finally {
        setLoading(false);
      }
    };

    fetchGuru();
  }, []);

  return { guru, loading, error };
};
