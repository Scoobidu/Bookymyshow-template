# Book my show

It is a movie booking web application. It is a single page web application. we can select from different movies, different time slots and different seats.

it has 4 components 
  1. `RenderMovies`
  2. `RenderSlots`
  3. `RenderSeats`
  4. `BookingDetails`
  
We are taking the` movie`, `slots` and `seats type` from data.js and mapping it  and then we are rendering it in  `RenderMovies`, `RenderSlots`, `RenderSeats`.

If we select a movie, active class is applied to that movie and it gets selected, it get store in a movie variable. its same for slots, it gets store in slot variable. For seats we are initializing an object with seats type as a key initially having values zero. If we select seats that looks for that seat type `key` and updates its value.

if there are no bookings to dislay it displays total bookings zero and no previous bookings.
![bms1](https://user-images.githubusercontent.com/102259781/230596170-db1f534d-7c04-4b0c-aa4c-9d7e34ff1b25.PNG)

 If we leave any thing unselected and try to book a movie `“missing Something”` notification pops up. 
 ![bms2](https://user-images.githubusercontent.com/102259781/230596509-e480da35-185a-4fed-a773-37ef92de7af8.PNG)
 
If we select movie, time slot and seats and click the `“Book Now”` button, the data of this booking goes to the `backend`. In `BookingData` (component) the data is rendered and all the variables are set empty for next bookings.
![bms4](https://user-images.githubusercontent.com/102259781/230596855-b5c74a63-3c42-4793-952e-3a1539f0ac4a.PNG)

