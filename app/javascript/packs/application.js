// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require jquery3
//= require jquery_ujs
//= require_tree .
 require("jquery")
 require("./slick")

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import '@fortawesome/fontawesome-free/js/all';

 Rails.start()
 Turbolinks.start()
 ActiveStorage.start()

 import "./hamburger"
 import "./area"
 import "./slick"
 import "./video"
 import "./detail"
 import './comment'
