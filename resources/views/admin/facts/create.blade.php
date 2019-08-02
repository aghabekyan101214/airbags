@extends("layouts.admin")
@section("content")
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Quick Facts</h1>
    </div>

    <form action="/control-panel/quick-facts" method="post" enctype="multipart/form-data">
        @csrf
        <div class="form-group">
            <textarea name="text_en" cols="30" required class="form-control form-control-user" rows="10" placeholder="Text English"></textarea>
        </div>
        <div class="form-group">
            <textarea name="text_es" cols="30" required class="form-control form-control-user" rows="10" placeholder="Text Spanish"></textarea>
        </div>
        <div class="form-group">
            <input type="text" class="form-control" name="url" placeholder="url">
        </div>
        <button class="btn btn-primary btn-user btn-block">Add</button>
    </form>
@endsection
