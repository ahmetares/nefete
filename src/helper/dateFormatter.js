import moment from "moment";

const formatDate = (created_at) => {
    moment.locale('en')
    const date = created_at
    return moment(date).format('D/MM/YYYY')
}

export default formatDate