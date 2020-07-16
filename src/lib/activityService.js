import axios from "axios";

const baseUrl = process.env.BASE_URL;

class Activity {
    constructor() {
        this.activity = axios.create({
            baseURL: `${baseUrl}/api`,
        });
    }

    createActivity({
        title,
        completion,
        rest
    }) {
        return this.activity
            .post("/activity", {
                title,
                completion,
                rest
            })
            .then(({
                data
            }) => data);
    }

    showAll() {
        return this.activity
            .get("/activity")
            .then(({
                data
            }) => data);
    }

    editActivity(id, {
        title,
        completion,
        rest
    }) {
        return this.activity
            .put(`/activity/${id}`, {
                title,
                completion,
                rest
            })
            .then(({
                data
            }) => data);
    }

    deleteOne(id) {
        return this.activity
            .post(`/activity/${id}/delete`)
            .then(({
                data
            }) => data);
    }

    deleteAll() {
        return this.activity
            .post('/activities')
            .then(({
                data
            }) => data);
    }
}

const activityService = new Activity();
export default activityService;