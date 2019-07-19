@extends("layouts.admin")
@section("content")
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Spread The World</h1>
    </div>

    <form action="/control-panel/quick-facts/{{ $data['page_data']->id }}" method="post" enctype="multipart/form-data">
        @csrf
        @method("PUT")
        <div class="form-group">
            <textarea name="text" cols="30" required class="form-control form-control-user" rows="10" placeholder="text">{{ $data['page_data']->text }}</textarea>
        </div>
        <div class="form-group">
            <input type="text" class="form-control" name="url" value="{{ $data['page_data']->url }}" placeholder="url">
        </div>
        <button class="btn btn-primary btn-user btn-block">Update</button>
    </form>
@endsection
