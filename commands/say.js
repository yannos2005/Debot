module.exports = async (args, message, Discord) => {
    if (
		!(await require('./../utils/authenticate')(
            [
                'Owner',
                'Dadmin',
                'Moderator'
            ],
			message,
		))
	) {
		return false;
	}

    const sayMessage = args.join(' ');
    message.delete().catch((O_o) => {});
    message.channel.send(sayMessage);
};