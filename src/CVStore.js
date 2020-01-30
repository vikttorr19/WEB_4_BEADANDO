import EventEmitter from 'events'

class CVStore extends EventEmitter {

    _candidate = [];
    _education = [];
    _knowledge = [];
    _other = [];

    emitChange() {
        this.emit('change')
    }

    addChangeListener(callback) {
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }
}

export default new CVStore();