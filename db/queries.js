import {eventModel}  from "@/modals/event-modals"

async function getAllEvents(){
    const allEvents = await eventModel.find()
    console.log(allEvents)
    return allEvents;
}
export  {getAllEvents}