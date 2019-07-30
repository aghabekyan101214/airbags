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
        <h1 class="h3 mb-0 text-gray-800">Update Vehicle</h1>
    </div>

    <form action="/control-panel/vehicles/{{ $data['page_data']->id }}" method="post" enctype="multipart/form-data">
        @csrf
        @method("PUT")
        <div class="form-group">
            <input type="file" class="form-control form-control-user" name="img" placeholder="file">
        </div>
        <div class="form-group">
            <img height="100" src="{{ asset("storage/".$data['page_data']->img) }}" alt="">
        </div>
        <div class="form-group">
            <input type="text" class="form-control form-control-user" value="{{ $data['page_data']->name }}" name="name" required placeholder="Mark">
        </div>
        <div class="form-group">
            <input type="text" class="form-control form-control-user" value="{{ $data['page_data']->phone }}" name="phone" placeholder="Phone">
        </div>

        <div class="form-group">
            <select name="text" id="" class="form-control" required>
                <option value="">Select Text/Sms</option>
                <option @if($data['page_data']->text == 1) {{ "selected" }} @endif value="1">Yes</option>
                <option @if($data['page_data']->text == 0) {{ "selected" }} @endif value="0">No</option>
            </select>
        </div>
        @foreach($data['page_data']->urls as $bin => $url)
            <div class="input-group mb-10" id="field">
                <input type="text" class="form-control" value="{{ $url->url }}" placeholder="Url" name="url[]">
                <div class="input-group-append">
                    <button class="@if($bin == 0) {{ 'btn btn-outline-secondary add-more ' }} @else {{ 'btn btn-outline-danger delete' }} @endif" type="button">+</button>
                </div>
            </div>
        @endforeach

        @foreach($data['page_data']->makes as $bin => $make)
            <div class="input-group mb-10" id="field2">
                <input type="text" class="form-control" value="{{ $make->make }}" placeholder="Make" name="make[]">
                <div class="input-group-append">
                    <button class="@if($bin == 0) {{ 'btn btn-outline-secondary add-make ' }} @else {{ 'btn btn-outline-danger delete' }} @endif" type="button">+</button>
                </div>
            </div>
        @endforeach

        <button class="btn btn-primary btn-user btn-block">Update</button>
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
