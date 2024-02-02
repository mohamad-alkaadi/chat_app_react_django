from channels.generic.websocket import AsyncJsonWebsocketConsumer

# step 2 create a route for the consumer 
# step 3 go to asgi file 
# step 4 add daphne to installed apps 
# step 5 
class PersonalChatConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        print("Testing connection and redis")
        await self.accept()