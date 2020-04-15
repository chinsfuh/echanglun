import React from 'react';


    render() {
    return  (
            <div className="Business">
                <ul>
                    {
                        this.state.data.map(s) =>
                        <div>
                    
                    {s.map(s => (
                        <li key={s.id}>
                           ID: {s.ID} | Service: {s.Service} | Service Name: {s.ServiceName} |
                           Address: {s.Address} | City: {s.City} | ZIP Postal: 
                           Business Phone: {s.BusinessPhone} | Mobile Phone: {s.MobilePhone} | Image: {s.Image}
                           | Link: {s.Link} | Operation Hour: {s.OperationHour}
                        </li>
                    ))}
                    </div>
    }
                </ul>
            </div>
        );

    }

}

export default App;