# Super Cable
## Action Cable Tutorial

Setup project
- `mkdir super_cable`
- `cd super_cable`
- `chruby 2.7.0`
- `rails new . -d postgresql`
- `rails db:create && rails db:migrate`

Standard model and controller
- `rails generate model Superhero name power weakness`
- `rails db:migrate`
- `rails generate controller Superheros index`

Routes
```
Rails.application.routes.draw do
  resources :superheros

  root to: 'superheros#index'
end
```

Setup controller
- index
    - `@my_hero` - newly created 
    - `@superheros` - all superheros minus `@my_hero`

Setup View
- Set up a list for `@superheros`
- Each `li` must have an `id`
- Add update method to controller
- Add form
    - `remote: true` or `form_with`

Generate Channel
- `rails generate channel Superheros`
- Update SuperheroChannel to stream from "superheros"
- Add `console.log(data)` to `superheros_channel.js`
- **Hint** check out the Network tab
    - Look for and click on `/cable`
    - You can see the messages being sent back and forth

First Broadcast
- Broadcast when a new Superhero is created
- ```
ActionCable.server.broadcast(
    "superheros",
    id: @my_hero.id,
    name: @my_hero.name,
    power: @my_hero.power,
    weakness: @my_hero.weakness,
)
```
- Refresh page
- Open console
- Open a new page 
- Should see the data being recieved

Broadcast from `update`
- same broadcast as `create`

JS time
- Look for the list item with the same id as the broadcasted data
- If there is no list item then we'll create it and add it to the list
- If the list item is the one for `@my_hero` then we can skip everything
- If we have found the list item we can update the HTML
0. Build the create new element logic
0. Build the update logic
- Demo working with multiple users
