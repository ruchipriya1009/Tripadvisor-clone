import axios from 'axios'
// import React from 'react'

const api = (params) => {
    return axios.get("http://localhost:8080/data",{
        params:{
            _page: params.page,
            _limit: params.limit,
            _sort : params.sort,
            _order: params.order
        }
      })
}

export default api