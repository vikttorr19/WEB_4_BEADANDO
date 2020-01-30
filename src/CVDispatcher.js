import {Dispatcher} from 'flux'
import CVStore from "./CVStore";

class CVDispatcher extends Dispatcher {

    handleViewAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action,
        });
    }
}

const dispatcher = new CVDispatcher();

dispatcher.register((data) => {
    if (data.action.actionType !== 'ADD_CANDIDATE') {
        return;
    }
    CVStore._candidate.push(data.action.payload);
    CVStore.emitChange();

});

dispatcher.register((data) => {
    if (data.action.actionType !== 'ADD_EDUCATION') {
        return;
    }
    CVStore._education.push(data.action.payload);
    CVStore.emitChange();
});

dispatcher.register((data) => {
    if (data.action.actionType !== 'DELETE_EDUCATION') {
        return;
    }
    console.log("Delete: " + data.action.payload);
        CVStore._education = [];
        CVStore.emitChange();

});

dispatcher.register((data) => {
    if (data.action.actionType !== 'ADD_KNOWLEDGE') {
        return;
    }
    CVStore._knowledge.push(data.action.payload);
    CVStore.emitChange();
});

dispatcher.register((data) => {
    if (data.action.actionType !== 'DELETE_KNOWLEDGE') {
        return;
    }
    console.log("Delete: " + data.action.payload);

        CVStore._knowledge=[];
        CVStore.emitChange();

});

dispatcher.register((data) => {
    if (data.action.actionType !== 'ADD_OTHER') {
        return;
    }
    CVStore._other = data.action.payload;
    CVStore.emitChange();
});

export default dispatcher;




