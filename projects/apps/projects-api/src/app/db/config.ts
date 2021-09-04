import { connect } from 'mongoose';
import { ConnectionOptions } from 'tls';

const dbConnection = async() => {
    try {
        await connect(process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as ConnectionOptions);
        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error at init db.')
    }
}

export {
    dbConnection
}