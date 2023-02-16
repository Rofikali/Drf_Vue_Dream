// mouse.js
import { ref } from 'vue'
import axios from 'axios'

// by convention, composable function names start with "use"
export default function useStudent() {
    // state encapsulated and managed by the composable
    const url = "http://127.0.0.1:8000/"
    const detail_url = "http://127.0.0.1:8000/detail/"
    const user_url = "http://127.0.0.1:8000/user/"
    const studentData = ref([])
    const error = ref(null)

    const getAllStudent = async () => {
        studentData.value = []
        error.value = null
        try {
            const res = await axios(url)
            console.log('res dta', res.data)
            studentData.value = res.data
        } catch (err) {
            // console.log('err error', err)
            error.value = err
        }

    }

    // Perticular User's Posts
    const GetAllUserData = async (username) => {
        studentData.value = []
        error.value = null
        try {
            const res = await axios(user_url + username)
            console.log('Perticular User All data', res.data)
            studentData.value = res.data
        } catch (err) {
            console.log('Perticular User All Errors', err)
            error.value = err
        }
    }

    // Get Single Student Data
    const getSingleStudent = async (id) => {
        studentData.value = []
        error.value = null
        try {
            const res = await axios(detail_url + id)
            studentData.value = res.data
        } catch (err) {
            error.value = err
        }
    }

    return {
        studentData,
        error,
        getAllStudent,
        getSingleStudent,
        GetAllUserData
    }
}


