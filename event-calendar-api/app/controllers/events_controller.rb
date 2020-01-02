class EventsController < ApplicationController
    def show
        event = Event.find_by(id: params[:id])
        if event
            render json: event
        else
            render json: { message: 'No event found with that id'}
        end
    end
    def index
        events = Event.all
        render json: events
    end
end
