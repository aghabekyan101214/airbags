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
        <h1 class="h3 mb-0 text-gray-800">Static Data</h1>
    </div>

    <form action="/control-panel/statics" method="post" enctype="multipart/form-data">
        @csrf
        <input type="hidden" name="id" value="{{ $data['page_data'][0]->id }}">
        <div class="form-group">
            <input type="file" class="form-control form-control-user" name="home_video" required placeholder="file">
        </div>
        @if(isset($data['page_data'][0]->home_video))
            <div class="form-group">
                <video height="300" src="{{ asset("/storage/".$data['page_data'][0]->home_video) }}"></video>
            </div>
        @endif
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
