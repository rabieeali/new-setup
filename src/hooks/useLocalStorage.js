import { useEffect } from "react"
import PropTypes from 'prop-types';



export const useLocalStorage = (key, initialValue) => {

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(initialValue))
    }, [key, initialValue])
}

useLocalStorage.prototype = {
    key: PropTypes.string,
    initialValue: PropTypes.string,
}