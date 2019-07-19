@extends("layouts.admin")
@section("content")
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Spread The World</h1>
    </div>

    <form action="{{ "/control-panel/spread-the-world/28/" }}" method="post" enctype="multipart/form-data">
        @csrf
        @method("PUT")
        <div class="form-group">
            <input type="file" class="form-control form-control-user" name="file" required placeholder="file">
        </div>
        <button class="btn btn-primary btn-user btn-block">Update</button>
    </form>
    <div class="row">
        <video width="320" height="240" controls>
            <source src="{{ asset("storage/".$data['page_data']->video) }}">
        </video>
    </div>
@endsection
