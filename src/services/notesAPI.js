import axios from 'axios'

const API_URL = "https://yqcivebcshcacktdxgim.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxY2l2ZWJjc2hjYWNrdGR4Z2ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MTM5NzksImV4cCI6MjA2NDQ4OTk3OX0.2mMO56RL-uP1A7XXzYUw93d6cNi0S35PA7iWdjaSjng"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },
    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}