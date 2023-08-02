import axios from "axios"
import { AxiosPromise } from "axios"
import { IFoodData } from "../interfaces/FoodData"
import { useQuery } from "@tanstack/react-query"

const API_url = 'http://localhost:8080'

const fetchData = async (): AxiosPromise<IFoodData[]> => {
    const response = await axios.get(API_url + '/foods')
    return response
}

export const useFoodData = () => {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['food-data'],
    retry: 2
  })
  return {
    ...query,
    data: query.data?.data
  }
}
