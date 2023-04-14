# Book my show

It is a movie booking web application. It is a single page web application. we can select from different movies, different time slots and different seats.

it has 4 components 
  1. `RenderMovies`
  2. `RenderSlots`
  3. `RenderSeats`
  4. `BookingDetails`
  
The system retrieves `movie`, `slot`, and `seat` data from a file called `data.js` and maps it to render it in three separate components: `RenderMovies`, `RenderSlots`, and `RenderSeats`.

When a user selects a movie or a time slot, the system applies an `active` class to indicate that it has been selected and stores the selection in the variables "movie" and "slot," respectively. For seat selection, the system initializes an object with the seat types as keys and sets their values to `zero`. When a user selects a seat, the system updates the corresponding seat type `key's` value in the object.

If there are no previous bookings to display, the system shows a message indicating that there are no bookings and sets the total bookings to zero.

![bms1](https://user-images.githubusercontent.com/102259781/230596170-db1f534d-7c04-4b0c-aa4c-9d7e34ff1b25.PNG)

If a user tries to book a movie without selecting all the required options, the system displays a notification indicating the specific warning.

![errrrr](https://user-images.githubusercontent.com/102259781/232031803-63958d99-3188-49b1-b559-c1bc0634cf89.PNG)
 
When a user selects a movie, time slot, and seats and clicks the `"Book Now"` button, the system sends the booking data to the`backend`. The system then renders the booking data in a component called `BookingData` and `resets` all the selection variables for future bookings.

![bms4](https://user-images.githubusercontent.com/102259781/230596855-b5c74a63-3c42-4793-952e-3a1539f0ac4a.PNG)

