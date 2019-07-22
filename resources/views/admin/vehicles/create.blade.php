@extends("layouts.admin")
@section("content")
    <style>
        * {
        .border-radius(0) !important;
        }

        #field {
            margin-bottom:20px;
        }
        #field2 {
            margin-bottom:20px;
        }
    </style>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Add Vehicle</h1>
    </div>

    <form action="/control-panel/vehicles" method="post" enctype="multipart/form-data">
        @csrf
        <div class="form-group">
            <input type="file" class="form-control form-control-user" name="img" required placeholder="file">
        </div>
        <div class="form-group">
            <input type="text" class="form-control form-control-user" name="name" required placeholder="Mark">
        </div>
        <div class="form-group">
            <input type="text" class="form-control form-control-user" name="phone" required placeholder="Phone">
        </div>
        <div class="form-group">
            <select name="text" id="" class="form-control" required>
                <option value="">Select Text/Sms</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
        </div>
        <div class="input-group mb-10" id="field">
            <input type="text" class="form-control" placeholder="Url" name="url[]">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary add-more" type="button">+</button>
            </div>
        </div>
        <div class="input-group mb-10" id="field2">
            <input type="text" class="form-control" placeholder="Make" name="make[]">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary add-make" type="button">+</button>
            </div>
        </div>
        <button class="btn btn-primary btn-user btn-block">Add</button>
    </form>
    <script>
        $(document).ready(function(){
            $(".add-more").click(function() {
                var elem = `<div class="input-group mb-3 inp " >
                                <input type="text" class="form-control" placeholder="Url" name="url[]" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-danger delete" type="button">-</button>
                                </div>
                            </div>`;
                $("#field").after(elem);
            });

            $(".add-make").click(function() {
                var elem = `<div class="input-group mb-3 inp " >
                                <input type="text" class="form-control" placeholder="Make" name="make[]" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-danger delete" type="button">-</button>
                                </div>
                            </div>`;
                $("#field2").after(elem);
            });

            $(document).on("click", ".delete", function() {
               $(this).parentsUntil("form").remove();
            });

        });
    </script>
@endsection
