import axios from "axios";

const baseUrl = process.env.BASE_URL || "http://localhost:5000";

class Activity {
  constructor() {
    this.activity = axios.create({
      baseURL: `${baseUrl}/api`,
      withCredentials: true,
    });
  }

  createActivity(title, completion) {
    return this.activity
      .post("/activity", {
        title,
        completion,
      })
      .then(({ data }) => data);
  }

  getOne(id) {
    return this.activity.get(`/activity/${id}`).then(({ data }) => data);
  }

  showAll() {
    return this.activity.get("/activity").then(({ data }) => data);
  }

  editActivity(id, { title, completion }) {
    return this.activity
      .put(`/activity/${id}`, {
        title,
        completion,
      })
      .then(({ data }) => data);
  }

  deleteOne(id) {
    return this.activity
      .post(`/activity/${id}/delete`)
      .then(({ data }) => data);
  }

  deleteAll() {
    return this.activity.post("/activities/delete").then(({ data }) => data);
  }
}

const activityService = new Activity();
export default activityService;
