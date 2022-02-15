export const getSavedConnections = () => {
    const savedConnectionIds = localStorage.getItem('saved_connections')
        ? JSON.parse(localStorage.getItem('saved_connections'))
        : [];

    return savedConnectionIds;
};

export const saveConnectionIds = (connectionIdArr) => {
    if (connectionIdArr.length) {
        localStorage.setItem('saved_connections', JSON.stringify(connectionIdArr));
    } else {
        localStorage.removeItem('saved_connections');
    }
};

export const removeConnectionId = (connectionId) => {
    const savedConnectionIds = localStorage.getItem('saved_connections')
        ? JSON.parse(localStorage.getItem('saved_connections'))
        : null;

    if (!savedConnectionIds) {
        return false;
    }

    const updatedSavedConnectionIds = savedConnectionIds?.filter((savedConnectionId) => savedConnectionId !== connectionId);
    localStorage.setItem('saved_connections', JSON.stringify(updatedSavedConnectionIds));

    return true;
};