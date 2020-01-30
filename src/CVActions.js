import CVDispatcher from './CVDispatcher'

class CVActions {

    addCandidate(candidate) {
        CVDispatcher.handleViewAction({
            actionType: 'ADD_CANDIDATE',
            payload: candidate
        })
    }
    deletCandidate(){
        CVDispatcher.handleViewAction({
            actionType:'DELET_CANDIDATE_LIST',
            payload: null
        })
    }

    addEducation(education) {
        CVDispatcher.handleViewAction({
            actionType: 'ADD_EDUCATION',
            payload: education
        })
    }

    deleteEducation(){
        CVDispatcher.handleViewAction({
            actionType: 'DELETE_EDUCATION',
            payload: null
        })
    }

    addKnowledge(knowledge) {
        CVDispatcher.handleViewAction({
            actionType: 'ADD_KNOWLEDGE',
            payload: knowledge
        })
    }

    deleteKnowledge(){
        CVDispatcher.handleViewAction({
            actionType: 'DELETE_KNOWLEDGE',
            payload: null
        })
    }

    addOther(other) {
        CVDispatcher.handleViewAction({
            actionType: 'ADD_OTHER_INFORMATION',
            payload: other
        })
    }
    deleteOther(){
        CVDispatcher.handleViewAction({
            actionType:'DELETE_OTHER_INFORMATION',
            payload: null
        })

    }
}

export default new CVActions();